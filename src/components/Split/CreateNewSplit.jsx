import React from "react";
import { Offcanvas, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import splitSchema from "../../validation.schema/split";

const USERS = [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Martin Lucas" },
    { id: 3, name: "Jason Bright" },
    { id: 4, name: "Sam Wills" },
    { id: 5, name: "John Lucas" },
];

function CreateNewSplit({ show, close }) {
    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            amount: "",
            splitType: "equal",
            users: [],
        },
        resolver: yupResolver(splitSchema),
    });

    const splitType = watch("splitType");
    const selectedUsers = watch("users");

    const toggleUser = (userId) => {
        const current = getValues("users");
        const exists = current.find((u) => u.id === userId);
        const updated = exists
            ? current.filter((u) => u.id !== userId)
            : [...current, { id: userId, value: null }];
        setValue("users", updated);
    };

    const handleSplitChange = (userId, value) => {
        const updated = getValues("users").map((u) =>
            u.id === userId ? { ...u, value: value } : u
        );
        setValue("users", updated);
    };

    
    const onSubmit = (data) => {
        const { amount, splitType, users } = data;     
        let finalUsers = [...users];
      
        if (splitType === "equal") {
          const perUser = Number(amount) / users.length;
      
          finalUsers = users.map((u) => ({
            ...u,
            value: parseFloat(perUser.toFixed(2)),
          }));
        }
      
        if (splitType === "custom") {
          const total = users.reduce((sum, u) => sum + Number(u.value || 0), 0);
          if (total !== Number(amount)) {
            alert("The total of custom amounts must match the total amount.");
            return;
          }
        }
      
    if (splitType === "percentage") {
          const totalPercent = users.reduce((sum, u) => sum + Number(u.value || 0), 0);
          if (totalPercent !== 100) {
            alert("The total of percentages must be exactly 100%.");
            return;
          }
        }
      
        const finalData = {
          amount,
          splitType,
          users: finalUsers,
        };
        const existing = JSON.parse(localStorage.getItem("splits") || "[]");
        existing.push(finalData);
        localStorage.setItem("splits", JSON.stringify(existing));
      };
      



    return (
        <Offcanvas show={show} onHide={close} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>New Split</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Total Amount</Form.Label>
                        <Form.Control type="number" {...register("amount")} />
                        {errors.amount && (
                            <p className="text-danger">{errors.amount.message}</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Split Type</Form.Label>
                        <Form.Select {...register("splitType")}>
                            <option value="equal">Equal</option>
                            <option value="custom">Custom Amount</option>
                            <option value="percentage">Percentage</option>
                        </Form.Select>
                        {errors.splitType && (
                            <p className="text-danger">{errors.splitType.message}</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Users</Form.Label>
                        {USERS.map((user) => {
                            const isChecked = selectedUsers.some((u) => u.id === user.id);
                            return (
                                <div key={user.id} className="mb-2">
                                    <Form.Check
                                        type="checkbox"
                                        label={user.name}
                                        checked={isChecked}
                                        onChange={() => toggleUser(user.id)}
                                    />
                                    {splitType !== "equal" && isChecked && (
                                        <Form.Control
                                            type="number"
                                            className="mt-1"
                                            placeholder={
                                                splitType === "percentage" ? "Percentage" : "Amount"
                                            }
                                            onChange={(e) =>
                                                handleSplitChange(user.id, e.target.value)
                                            }
                                        />
                                    )}
                                </div>
                            );
                        })}
                        {errors.users && (
                            <p className="text-danger">{errors.users.message}</p>
                        )}
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Create Split
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default CreateNewSplit;

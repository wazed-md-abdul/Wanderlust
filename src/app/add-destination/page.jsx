"use client"
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from "@heroui/react";
import { Toast, toast } from "@heroui/react";
import React, { useState } from 'react';

const AddDestinationPage = () => {
  const [pending, setPending] = useState(false);
  const noop = () => { };
  const onSubmit = async (e) => {
    setPending(true);
    NEXT_PUBLIC_SERVER_URL
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)


    })
    const data = await res.json();
    console.log(data);
    setPending(false);
    data && toast.success("Successfully Added", {
      actionProps: {
        className: "bg-success text-success-foreground",
        onPress: noop,
      },
      description: "Visit Destionations Page to see the added destination",
    })
    e.target.reset();

  };


  return (
    <>
      <div className="container mx-auto">

        <h1 className="text-2xl font-bold">Add Destination</h1>
        <form
          className="p-10 space-y-8"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input
                type="number"
                placeholder="1299"
                className=""
              />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input
                placeholder="7 Days / 6 Nights"
                className=""
              />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className=""
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            isLoading={pending}
            className=" -none w-full bg-cyan-500 text-white"
          >
            {pending ? "Adding Package..." : "Add Destination"}
          </Button>
        </form>

      </div>

      <Toast.Provider />
    </>
  );
};

export default AddDestinationPage;
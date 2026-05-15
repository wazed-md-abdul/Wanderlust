"use client";

import { Envelope, PencilToSquare } from "@gravity-ui/icons";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea ,Button , Modal, Surface} from "@heroui/react";
import { useState } from "react";
import { Toast,toast } from "@heroui/react";
export function EditModal({destination}) {
       const {
        _id,
        image,
        price,
        destinationName,
        duration,
        country,
        description,
        category,
        departureDate,
    } = destination;
    const [pending, setPending] = useState(false);
      const noop = () => { };
      const onSubmit = async (e) => {
        setPending(true);
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
    
    
        })
        const data = await res.json();
        console.log(data);
        setPending(false);
        data && toast.info("Successfully Edited", {
          actionProps: {
            className: "bg-info text-info-foreground",
            onPress: noop,
          },
          description: "Visit Destionations Page to see the Updated destination",
        })
        e.target.reset();
    
      };
    return (
        <Modal>
                <Toast.Provider />
             <Button className={'rounded-none'} variant='outline'> <PencilToSquare className='mr-2'/>Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Destination</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we'll get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    className="p-10 space-y-8"
                                    onSubmit={onSubmit}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField  defaultValue={destinationName} name="destinationName" isRequired>
                                                <Label>Destination Name</Label>
                                                <Input placeholder="Bali Paradise" className="" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField defaultValue={country} name="country" isRequired>
                                            <Label>Country</Label>
                                            <Input  placeholder="Indonesia" className="" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <div>
                                            <Select
                                                defaultValue={category}
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
                                        <TextField  defaultValue={price} name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input
                                              
                                                type="number"
                                                placeholder="1299"
                                                className=""
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField   defaultValue={duration} name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                              
                                                placeholder="7 Days / 6 Nights"
                                                className=""
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date */}
                                        <div className="md:col-span-2">
                                            <TextField  defaultValue={departureDate}   name="departureDate" type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date"className="" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField  defaultValue={image} name="image" isRequired>
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
                                            <TextField name="description" isRequired  defaultValue={description}>
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

                                    <Button slot='close'
                                        type="submit"
                                        variant="outline"
                                        isLoading={pending}
                                        className=" -none w-full bg-cyan-500 text-white"
                                    >
                                        {pending ? "Adding Package..." : "Add Destination"}
                                    </Button>
                                </form>

                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
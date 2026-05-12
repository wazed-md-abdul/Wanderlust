"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

export function SignUpForm() {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        console.log(formData);
        const {data, error } = await authClient.signUp.email({
                ...formData, 
        })
        console.log(data, error);
        if(data)
        {
            router.push("/");
        }
        if(!data){
            alert(error.message)
        }
        
    };
    const handleGoogleSignIn = async () => {
        const {data, error } = await authClient.signIn.social(
            {
                provider: "google",
            }
        )
        if(data)
        {
            router.push("/");
        }
        if(!data){
            alert(error.message)
        }

    }

    return (
       <>
       
       
        <Form
            className="flex w-96 flex-col gap-4 my-8 mx-auto"
            render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
        >
              <TextField
                isRequired
                name="name"
                type="text"
                
            >
                <Label>Enter Your Name</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </TextField>
            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }

                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </TextField>
          
            <TextField
                isRequired
                name="image"
                type="text"
                
            >
                <Label>Enter Your Image</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                    if (value.length < 8) {
                        return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }

                    return null;
                }}
            >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
            </TextField>

            <div className="flex gap-2">
                <Button onSubmit={onSubmit} type="submit">
                    <Check />
                    Submit
                </Button>
            </div>
        </Form>
        <div className="text-center text-2xl whitespace-nowrap">or</div>
        <Separator />
        <div className="flex gap-2 justify-center">
            <Button onClick={handleGoogleSignIn} className={' bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg'}>Google</Button>

        </div>
       </>
    );
}
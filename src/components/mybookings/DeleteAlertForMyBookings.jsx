"use client";

import {AlertDialog, Button} from "@heroui/react";
import {TrashBin} from '@gravity-ui/icons';
import { useRouter } from "next/navigation";

export function DeleteAlertForMyBookings({userId}) {
    const router = useRouter();


  const deleteFun = async () => {
    const res = await fetch(`http://localhost:5000/booking/${userId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data?.acknowledged) {
      router.push("/my-bookings");
    }

  };

  return (
    <AlertDialog>
       
      <Button className={'rounded-none w-full'} variant="danger">  <TrashBin /> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong> this bookings </strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={deleteFun}>
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
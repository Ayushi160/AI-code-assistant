import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Lookup from "@/data/Lookup";
import { Button } from "../ui/button";
import GoogleButton from "react-google-button";

function SigninDialog({ openDialog, closeDialog }) {
  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription >
          <div className=" flex flex-col items-center justify-center gap-2">
            <h2 className="font-bold text-2xl text-white">{Lookup.SIGNIN_HEADING}</h2>
            <p className="">{Lookup.SIGNIN_SUBHEADING}</p>
            <GoogleButton onClick={() => { console.log('Google button clicked') }}/>
            {/* <Button className="bg-blue-500 text-white hover:bg-blue-400 ">Sign in with Google</Button> */}
            <p>{Lookup.SIGNIn_AGREEMENT_TEXT}</p>
           
          </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SigninDialog;

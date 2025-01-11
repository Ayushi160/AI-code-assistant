"use client";

import Lookup from "@/data/Lookup";
import { ArrowRight, Link } from "lucide-react";
import React, { useContext, useState } from "react";
import { Textarea } from "../ui/textarea";
import Colors from "@/data/Colors";
import { MessagesContext } from "@/context/messagesContext";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import SigninDialog from "./SigninDialog";

function Hero() {
  const [userInput, setuserInput] = useState(false);
  const [openDialog,setOpenDialog] = useState(false);

  const {messages,setMessages} = useContext(MessagesContext)
  const {details,setDetails} = useContext(UserDetailsContext);
 

  const onGenerate = (input) => {
    if (!details?.name) {
      setOpenDialog(true)
    }
     setMessages({
      role:'user',
      content: input
     })
  }

  return (
    <div className="flex flex-col items-center mt-24 xl:mt-32 gap-2">
      <h2 className="font-bold text-5xl"> {Lookup.HERO_HEADING}</h2>
      <p className="text-gray-400 text-medium text-md mt-1">
        {Lookup.HERO_DESC}
      </p>
      <div
        className="border w-full mt-3 p-5 rounded-xl max-w-xl"
        style={{
          backgroundColor: Colors.BACKGROUND,
        }}
      >
        <div className="flex gap-2">
          <textarea
            className="bg-transparent h-36 max-h-56 w-full outline-none resize-none"
            onChange={(event) => setuserInput(event.target.value)}
            placeholder={Lookup.INPUT_PLACEHOLDER}
          />
          {userInput && (
            <ArrowRight
            onClick={() => {
              onGenerate(userInput)
            }}
            className="bg-blue-500 hover:bg-gray-700 rounded-sm p-1 h-8 w-8 cursor-pointer" />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-wrap max-w-2xl justify-center gap-2">
        {Lookup.SUGGSTIONS.map((item, index) => (
          <h2
          onClick={() => {
            onGenerate(item)
          }}
            className="p-3 border rounded-full text-sm cursor-pointer text-gray-500 hover:text-white"
            key={index}
          >
            {item}
          </h2>
        ))}
      </div>
      <SigninDialog openDialog={openDialog} closeDialog={(value) => {setOpenDialog(false)}}/>
    </div>
  );
}

export default Hero;

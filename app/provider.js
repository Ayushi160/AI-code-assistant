"use client";

import React, { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "@/components/custom/Header";
import { MessagesContext } from "@/context/messagesContext";
import { UserDetailsContext } from "@/context/UserDetailsContext";

function Provider({ children }) {
  const [messages, setMessages] = useState();
  const [details,setDetails] = useState();
  return (
    <div>
      <UserDetailsContext.Provider value={{ details,setDetails }}>
        <MessagesContext.Provider value={{ messages, setMessages }}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header></Header>
            {children}
          </NextThemesProvider>
        </MessagesContext.Provider>
      </UserDetailsContext.Provider>
    </div>
  );
}

export default Provider;

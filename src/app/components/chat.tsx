"use client";

import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex flex-col w-full h-full bg-zinc-500">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold text-center">AI Chat</h1>
      </header>

      <section className="p-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-3xl mx-auto items-center"
        >
          <input
            className="flex-1 min-h-[40px] p-2"
            placeholder="Type your question here..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Button className="ml-2" type="submit">
            Submit
          </Button>
        </form>
      </section>

      <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
        <ul>
          {messages.map((m, index) => (
            <>
              {m.role === "user" ? (
                <li key={index} className="flex flex-row">
                  <div className="rounded-xl p-4 bg-zinc-200 shadow-md flex">
                    <p className="text-primary font-semibold">
                      Question: <span className="font-light">{m.content}</span>
                    </p>
                  </div>
                </li>
              ) : (
                <li key={index} className="flex flex-row-reverse">
                  <div className="rounded-xl p-4 bg-slate-500 shadow-md flex w-3/4">
                    <p className="text-primary">
                      Answer: <span className="font-bold">{m.content}</span>
                    </p>
                  </div>
                </li>
              )}
            </>
          ))}
        </ul>
      </section>
    </main>
  );
}

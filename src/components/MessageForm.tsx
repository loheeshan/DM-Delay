import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Toaster as Sonner } from "sonner"
import { toast } from "sonner"

export const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

const MessageForm = () => {

  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(10);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sendMessage, setSendMessage] = useState<string>("");

  const handleSend = () => {
    // Validation
    if (!message.trim()) {
      toast.error("Please enter a message first!");
      return;
    }

    setIsSending(true);
    
    // Show scheduling notification
    toast.info(`Message scheduled to send in ${delay} seconds`, {
      description: "You can cancel it before it sends"
    });

    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);
      
      // Show success notification
      toast.success("Message sent successfully! 🎉", {
        description: `"${message}" has been delivered`
      });
    }, delay * 1000);

    setTimerId(id);
  }

  const handleCancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
    setIsSending(false);
    
    // Show cancellation notification
    toast.warning("Message sending cancelled", {
      description: "Your message was not sent"
    });
  }


  return (
    <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
        <h2 className="text-2xl font-bold text-gray-800">DM Delay Button</h2>

        <Textarea 
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)} />

        <Input type='number'
        placeholder='Delay in secounds'
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))} 
        disabled={isSending} />

        {!isSending ? (
          <Button className='w-full' onClick={handleSend}>Send With Delay</Button>
        ) : (
          <Button className='w-full' variant='destructive' onClick={handleCancel}>Cancel Sending</Button>
        )}

        {/* {sendMessage && (
            <div className='bg-green-100 border rounded p-3 text-green-900'>
              <p className='font-semibold'>Message Sent:</p>
              <p>{sendMessage}</p>
            </div>
        )} */}
        <Toaster />
    </div>


  )
}

export default MessageForm

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}
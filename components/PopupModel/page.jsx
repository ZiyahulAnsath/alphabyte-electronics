'use-client'
import React, { useState, useRef } from 'react';
import { Button, Input, Modal } from 'antd';
import { OpenAI } from 'openai'; // Corrected import statement

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const PopupModel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const buttonRef = useRef(null);

    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUserInput = async () => {
        setLoading(true);
        setChatHistory(prevChat => [
            ...prevChat,
            { role: "user", content: userInput },
        ]);

        let attempts = 3; // Maximum number of retry attempts
        while (attempts > 0) {
            try {
                const chatCompletion = await openai.chat.completions.create({
                    messages: [...chatHistory, { role: "assistant", content: userInput }],
                    model: "gpt-3.5-turbo"
                });
    
                setChatHistory(prevChat => [
                    ...prevChat,
                    { role: "assistant", content: chatCompletion.choices[0].message.content },
                ]);
    
                setUserInput('');
                setLoading(false);
                return; // Exit the function if successful
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    // Rate limit exceeded, retry after some time with exponential backoff
                    const delay = Math.pow(2, 3 - attempts) * 1000; // Exponential backoff
                    await new Promise(resolve => setTimeout(resolve, delay));
                    attempts--;
                } else {
                    console.error("Error:", error);
                    setLoading(false);
                    return; // Exit the function in case of other errors
                }
            }
        }
        console.error("Exceeded maximum retry attempts.");
        setLoading(false);
    }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const calculateModalPosition = () => {
        const buttonRect = buttonRef.current?.getBoundingClientRect();
        if (!buttonRect) return { top: 0, left: 0 }; // Handle null case
        const modalTop = buttonRect.top - window.innerHeight * .8; // Adjust this value as needed
        const modalLeft = buttonRect.left - window.innerHeight * 0.33; // Adjust this value as needed
        return { top: modalTop, left: modalLeft };
    };

    return (
        <>
            <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
                <Button type="default" onClick={openModal} ref={buttonRef}>
                    Display a modal dialog at 20px to Top
                </Button>
            </div>
            <Modal
                title="20px to Top"
                visible={modalOpen}
                onCancel={closeModal}
                footer={[
                    <div className='flex' key="footer">
                        <Input type='text' placeholder="Ask me prefered Laptop...!" value={userInput} onChange={(e) => setUserInput(e.target.value)}
                            className='p-2 rounded-l-lg ' />

                        {loading ? (
                            <div className="bg-blue-500 text-teal-50 p-2 rounded-md animate-pulse">Loading....</div>
                        ) : (<button onClick={handleUserInput} className='bg-blue-500 text-white p-2 rounded-r-lg hover:text-red-300'>Ask</button>)}
                    </div>
                ]}
                style={{
                    position: 'fixed',
                    zIndex: 1001,
                    ...(modalOpen && calculateModalPosition()),
                }}
            >
                <div style={{ minHeight: '70vh', maxHeight: '70vh', overflowY: 'auto' }}>
                    {chatHistory.map((message, index) => (
                        <div key={index} className={`${message.role === 'user' ? 'text-left' : 'text-right'} mb-2`}>
                            <div className={`rounded-full p-2 max-w-md mx-4 inline-block ${message.role === 'user' ? 'bg-blue-300 text-blue-800' : 'bg-green-300 text-green-800'}`}>
                                {message.role === "user" ? 'Z' : "A"}
                            </div>
                            <div className={`max-w-md mx-4 my-2 inline-block ${message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} p-2 rounded-md`}>{message.content}</div>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default PopupModel;

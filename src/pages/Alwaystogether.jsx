import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Alwaystogether = () => {
    const formRef = useRef();
    const [form, setForm] = useState({name: "", message: "", email: ""});
    const [loading, setLoading] = useState(false);
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const handleFocus = () => {};
    const handleBlur = () => {};
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Om and Aastha",
                from_email: form.email,
                to_email: 'aasthagandhi388@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(() => {
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
        <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>
                Apdu j mail che lakhi le😁😁
            </h1>
            <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} ref={formRef}>
            <label className='text-black-500 font-semibold'>
                    NickName
                    <input
                    type='name'
                    id='name'
                    name='name'
                    className='input'
                    required
                    placeholder='aapis new name?'
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
            <label className='text-black-500 font-semibold'>
                    Email
                    <input
                    type='email'
                    id='email'
                    name='email'
                    className='input'
                    required
                    placeholder='aapdo j lakhvano?'
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className='text-black-500 font-semibold'>
                    Message
                    <textarea 
                    name='message'
                    rows={4}
                    className='textarea'
                    required
                    placeholder='Kem Chho?'
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <button
                type='submit'
                disabled={loading}
                className='btn'
                onFocus={handleFocus}
                onBlur={handleBlur}
                >
                    {loading ? 'Send Thaay che...' : 'Sent thayi gyu'}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Alwaystogether

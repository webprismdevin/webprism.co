import { useState } from "react";
import Link from 'next/link';
import styles from './contactform.module.css';

export interface ContactProps {
    name?: string,
    mission?: string
}

export interface ReqOptType {
    method: string,
    body: FormData,
    redirect: string
}

export default function ContactForm(props: ContactProps){
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState(props.mission);
    const [anythingElse, setAnythingElse] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleFormSubmit = () => {
        setLoading(true);

        const formdata = new FormData();
        formdata.append("name", name as string);
        formdata.append("mission", anythingElse);
        formdata.append("emailphone", email);
        
        if(message !== "" && email !== ""){
            fetch("https://hooks.zapier.com/hooks/catch/2575639/bt6c8ks/", {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
              })
            .then(response => response.json())
            .then(result => {
                if(result.status === "success") 
                setSuccess(true)
                setLoading(false);
            })
            .catch(error => console.log('error', error));
        } else alert('Please complete the form. 🙏')
    }

    return(<>
        {!success && <>
                <div className="block">
                    <input 
                        type="text"
                        className={styles.emailInput}
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Enter your email or phone number"
                    />
                </div>
                <div className={`block ${styles.anything_else} ${email === "" ? styles.anything_hidden : styles.anything_show }`}>
                    <input className={` ${styles.emailInput} block`} placeholder="enter your name" value={props.name} onChange={e => setName(e.target.value)}/>
                    <textarea className={`${styles.messageInput} block`} value={anythingElse} onChange={e => setAnythingElse(e.target.value)} placeholder="Anything else you'd like to share?"></textarea>
                </div>
                <div>
                    <input type="button" className={`block ${styles.submit_button} button is-link ${loading && "is-loading"}`} value="Submit" onClick={handleFormSubmit}/>
                </div>
        </>}
        {success &&
        <div className="container">
            <div className="block has-text-centered">
                <p>We&apos;ll reach out soon! If you&apos;d like to book a time to speak with us right meow 🐱, <Link href="https://usemotion.com/meet/devin-santamaria/quick-connect">click here</Link>.</p>
            </div>
        </div>
        }
    </>)
}
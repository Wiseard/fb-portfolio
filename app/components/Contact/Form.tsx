'use client'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import styles from '../../css/contact.module.css'

const Form = () => {
  const [userContact, setUserContact] = useState<User>({
    name: '',
    email: '',
    message: '',
  })
  const [formDisabled, setFormDisabled] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const currentForm = form.current
    setFormDisabled(true)

    if (currentForm === null) return
    emailjs
      .sendForm(
        'service_3kaqtft',
        'template_kflquki',
        currentForm,
        '6BLdInWYK8y_pfV8J'
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormDisabled(false)
          setUserContact({ name: '', email: '', message: '' })
          toast(
            `Thanks for your message! I'll come back to you within 48 hours.`,
            {
              // Styling
              style: {
                backgroundColor: 'transparent',
                color: 'var(--bg-beige)',
                borderColor: 'transparent',
                width: '100%',
                fontSize: '0.8rem',
              },
              // Custom Icon
              icon: '✅',
              // Change colors of success/error/loading icon            // Aria
              ariaProps: {
                role: 'status',
                'aria-live': 'polite',
              },
            }
          )
        },
        (error) => {
          console.log(error.text)
          toast(`There was an error, please try again.`, {
            // Styling
            style: {
              backgroundColor: 'transparent',
              color: 'var(--bg-beige)',
              borderColor: 'transparent',
              width: '100%',
              fontSize: '0.8rem',
            },
            // Custom Icon
            icon: '✅',
            // Change colors of success/error/loading icon            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          })
        }
      )
  }

  return (
    <div className={styles.formContainer}>
      <h3>Let's talk</h3>
      <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Name*"
          required
          value={userContact.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserContact({ ...userContact, name: e.target.value })
          }
        />
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="Email*"
          required
          value={userContact.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserContact({ ...userContact, email: e.target.value })
          }
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Message*"
          required
          value={userContact.message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserContact({ ...userContact, message: e.target.value })
          }
        />
        <button
          type="submit"
          className={styles.btnSubmit}
          disabled={formDisabled}
        >
          {formDisabled && <span className={styles.loader}></span>}
          <span>send</span>
        </button>
      </form>
    </div>
  )
}

export default Form

import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { MdErrorOutline } from 'react-icons/md'

const SignUp = () => {

    // First Name state
    const [firstName, setFirstName] = useState()
    const [firstNameError, setFirstNameError] = useState(false)

    let manageFirstName = (element) => {
        let fName = element.target.value
        setFirstName(fName)
        setFirstNameError(false)
    }

    // Last Name state
    const [lastName, setLastName] = useState()
    const [lastNameError, setLastNameError] = useState(false)

    let manageLastName = (element) => {
        let lName = element.target.value
        setLastName(lName)
        setLastNameError(false)
    }

    // Email state
    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState(false)

    let manageEmail = (element) => {
        let emailValue = element.target.value
        setEmail(emailValue)
        setEmailError(false)
    }

    // Telephone state
    const [tel, setTel] = useState()
    const [telError, setTelError] = useState(false)

    let manageTel = (element) => {
        let telValue = element.target.value
        setTel(telValue)
        setTelError(false)
    }

    // Password state
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState(false)
    const [passCondition, setPassCondition] = useState()

    let managePassword = (element) => {
        let passwordValue = element.target.value
        setPassword(passwordValue)
        setPasswordError(false)
        setPassCondition('')
    }

    // Retype Password state
    const [rePassword, setRePassword] = useState()
    const [rePasswordError, setRePasswordError] = useState(false)

    let manageRePassword = (element) => {
        let rePasswordValue = element.target.value
        setRePassword(rePasswordValue)
        setRePasswordError(false)
    }

    // Submit button function
    let manageSubmit = () => {
        if (!firstName) {
            setFirstNameError(true)
        }
        if (!lastName) {
            setLastNameError(true)
        }
        if (!email) {
            setEmailError(true)
        }
        if (!tel) {
            setTelError(true)
        }
        if (!password) {
            setPasswordError(true)
        }else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {
            setPassCondition('Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.')
        }
        if (!rePassword) {
            setRePasswordError(true)
        }
    }

  return (
    <div className='md:px-0 px-2'>
        <section id="signup" className='md:py-[124px] py-10'>
            <Container className='border-b border-[#cdcdcd]'>
                <BreadCrumbs />
                <p className='md:text-base text-xs text-[#767676] max-w-[644px] mb-6 mt-12 md:mt-[127px] md:mb-[62px] md:leading-[187.5%] leading-[150.5%]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
            </Container>
            <Container className='border-b border-[#cdcdcd] pb-[69px]'>
                <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]'>
                Your Personal Details
                </h2>
                <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                    <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                        <label htmlFor="">
                        First Name
                        </label>
                        <input onChange={manageFirstName} value={firstName} type="text" placeholder='First Name' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                        {
                            firstNameError && (
                                <>
                                <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                This field is Required 
                                </p>
                                <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0'/>
                                </>
                            )
                        }
                    </div>
                    <div className="lname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                        <label htmlFor="">
                        Last Name
                        </label>
                        <input onChange={manageLastName} value={lastName} type="text" placeholder='Last Name' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                        {
                            lastNameError && (
                                <>
                                <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                This field is Required 
                                </p>
                                <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0'/>
                                </>
                            )
                        }
                    </div>
                    <div className="mail flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                        <label htmlFor="">
                        Email address
                        </label>
                        <input onChange={manageEmail} value={email} type="email" placeholder='company@domain.com' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                        {
                            emailError && (
                                <>
                                <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                This field is Required 
                                </p>
                                <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0'/>
                                </>
                            )
                        }
                    </div>
                    <div className="telephone flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                        <label htmlFor="">
                        Telephone
                        </label>
                        <input onChange={manageTel} value={tel} type="tel" placeholder='Your phone number' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                        {
                            telError && (
                                <>
                                <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                This field is Required 
                                </p>
                                <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0'/>
                                </>
                            )
                        }
                    </div>
                </div>
            </Container>
            <Container className='border-b border-[#cdcdcd] pb-[69px]'>
                <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]'>
                New Customer
                </h2>
                <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                    <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px]">
                        <label htmlFor="">
                        Address 1
                        </label>
                        <input type="text" placeholder='example: 4279 Zboncak Port Suite 6212' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                    </div>
                    <div className="lname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px]">
                        <label htmlFor="">
                        Address 2
                        </label>
                        <input type="text" placeholder='-' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                    </div>
                    <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px]">
                        <label htmlFor="">
                        City
                        </label>
                        <input type="text" placeholder='Your City' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                    </div>
                    <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px]">
                        <label htmlFor="">
                        Post Code
                        </label>
                        <input type="text" placeholder='example: 05228' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                    </div>
                </div>
            </Container>
            <Container className='border-b border-[#cdcdcd] pb-[69px]'>
                <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]'>
                Your Password
                </h2>
                <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                    <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                        <label htmlFor="">
                        Password
                        </label>
                        <input onChange={managePassword} value={password} type="text" placeholder='Password' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute top-full left-0'>
                            {passCondition}
                        </p>
                        {
                            passwordError && (
                                <>
                                <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                This field is Required 
                                </p>
                                <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0'/>
                                </>
                            )
                        }
                    </div>
                    <div className="lname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                        <label htmlFor="">
                        Repeat Password
                        </label>
                        <input onChange={manageRePassword} value={rePassword} type="text" placeholder='Repeat Password' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'/>
                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute top-full left-0'>
                            {passCondition} 
                        </p>
                        {
                            rePasswordError && (
                                <>
                                <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                This field is Required 
                                </p>
                                <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0'/>
                                </>
                            )
                        }
                    </div>
                </div>
            </Container>
            <Container className='md:pt-16 pt-8'>
                <div className='flex md:gap-4 gap-2 items-center'>
                    <input type="checkbox" className='w-[11px] h-[11px]'/>
                    <p className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                    I have read and agree to the Privacy Policy
                    </p>
                </div>
                <div className='flex md:gap-9 gap-6 md:mt-[23px] mt-3 md:mb-[27px] mb-5'>
                    <p className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                    Subscribe Newsletter
                    </p>
                    <div className='flex md:gap-4 gap-2 items-center'>
                        <input type="checkbox" className='w-[11px] h-[11px]'/>
                        <p className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                        Yes
                        </p>
                    </div>
                    <div className='flex md:gap-4 gap-2 items-center'>
                        <input type="checkbox" className='w-[11px] h-[11px]'/>
                        <p className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                        No
                        </p>
                    </div>
                </div>
                <button onClick={manageSubmit} className='md:py-4 md:px-20 py-[10px] px-10 bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300'>
                Log in
                </button>
            </Container>
        </section>
    </div>
  )
}

export default SignUp
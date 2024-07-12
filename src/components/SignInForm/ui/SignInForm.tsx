"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import cls from "./SignInForm.module.scss";
import { PageLoader } from "@/components/ui/PageLoader";
import Link from "next/link";
import Image from "next/image";
import { HeaderLogoIcon } from "@/components/ui/icons/HeaderLogoIcon";
import { Field, Form, Formik } from "formik";
import { CustomField } from "@/components/ui/CustomField";

export const SignInForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (value: string) => {
        if (!value) return "Email Required";
    };

    const validatePassword = (value: string) => {
        if (!value) return "Password Required";
    };

    return (
        <>
            {isLoading ? (
                <PageLoader className={cls.loader} />
            ) : (
                <div className={cls.SignInForm}>
                    <Link href="/">
                        <HeaderLogoIcon />
                    </Link>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={async (values, { setValues, setTouched }) => {
                            // console.log("here");
                            // console.log(values);
                            // setValues({ email: "", password: "" });
                            // setTouched({ email: false, password: false });

                            setIsLoading(true);
                            const res = await signIn("credentials", {
                                username: values.email,
                                password: values.password,
                                redirect: false,
                            });

                            if (res && !res.error) {
                                router.push("/");
                            } else {
                                console.log(res);
                            }
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <span style={{ display: errors.email && touched.email ? "block" : "none" }}>
                                    Field is requierd
                                </span>
                                <CustomField fullWidth validate={validateEmail} type="text" name="email" />
                                <span style={{ display: errors.password && touched.password ? "block" : "none" }}>
                                    Field is requierd
                                </span>
                                <CustomField fullWidth validate={validatePassword} type="password" name="password" />
                                <Button type="submit" className={cls.btn} variant={"white"}>
                                    Продолжить
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <p className={cls.authData}>
                        *Вы можете авторизоваться используя следующие данные: имя пользователя - user1 пароль - user1
                    </p>
                </div>
            )}
        </>
    );
};

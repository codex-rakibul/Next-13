import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }
  

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Next Auth</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. provident
            eveniet dignissimos dolores corporis !
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
              // onChange={formik.handleChange}
              // value={formik.values.email}
              {...formik.getFieldProps('email')}
            />
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="password"
              name="password"
              placeholder="Password"
              // onChange={formik.handleChange}
              // value={formik.values.password}
              {...formik.getFieldProps('password')}
            />
          </div>
          <div className={""}>
            <button className={styles.input_button} type="submit">
              Login
            </button>
          </div>
          <div className={""}>
            <button
              onClick={handleGoogleSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign In with Google
              <Image src={"/assets/google.svg"} height={20} width={20}></Image>
            </button>
          </div>
          <div className={""}>
            <button
              onClick={handleGithubSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign In with Github
              <Image src={"/assets/github.svg"} height={20} width="20"></Image>
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          don't have an account yet?
          <Link className="text-blue-700" href={"/register"}>
            Sign up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;

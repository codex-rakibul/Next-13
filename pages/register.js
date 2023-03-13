import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/Register.module.css";
import { useFormik } from "formik";
const Register = () => {
  const [show, setShow] = useState({password: false, cpassword:false})
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      gender: "",
      dateofbirth: "",
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
        <title>Registration</title>
      </Head>
      <h1 className="text-gray-800 text-4xl font-bold py-4">Registration</h1>
      <form className="flex flex-col gap-5  m-2" onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="text"
            name="name"
            placeholder="Full Name"
            // onChange={formik.handleChange}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
          />
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="email"
            name="email"
            placeholder="Email"
            // onChange={formik.handleChange}
            // value={formik.values.email}
            {...formik.getFieldProps("email")}
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
            {...formik.getFieldProps("password")}
          />
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            {...formik.getFieldProps("cpassword")}
          />
        </div>
        <div className={""}>
          <button className={styles.input_button} type="submit">
            Sign up
          </button>
        </div>
        <div className={""}>
          <button
            onClick={handleGoogleSignin}
            className={styles.button_custom}
            type="button"
          >
            Sign up with Google
            {/* <Image src={"/assets/google.svg"} height={20} width={20}></Image> */}
          </button>
        </div>
        <div className={""}>
          <button
            onClick={handleGithubSignin}
            className={styles.button_custom}
            type="button"
          >
            Sign up with Github
            {/* <Image src={"/assets/github.svg"} height={20} width="20"></Image> */}
          </button>
        </div>
        <p className="text-center text-gray-400">
          Already have a account!
          <Link className="text-blue-700" href={"/login"}>
            Sign in
          </Link>
        </p>
      </form>
    </Layout>
  );
};

export default Register;

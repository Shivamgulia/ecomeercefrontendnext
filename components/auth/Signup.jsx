import React, { useEffect, useState } from "react";
import styles from "@/styles/components/Auth/Signup.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

function SignUp(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const session = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status]);

  async function signup(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    const address = event.target.address.value;
    const contact = event.target.contact.value;

    // Define endpoint based on user role
    const endpoint =
      props.role === "seller"
        ? "http://127.0.0.1:8000/test/sellerregister/"
        : "http://127.0.0.1:8000/test/customerregister/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username, address, contact }),
      });
      const data = await response.json();

      if (!data.error) {
        toast.success("User Created Successfully");
        router.push("/login");
      } else {
        setError(data.error);
        toast.error(data.error);
      }
    } catch (error) {
      setError("SignUp Failed. Please try again.");
      toast.error("SignUp Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={`${styles.cont}`}>
        <button
          className={`${styles.goback}`}
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
        <div className={styles.loginCont}>
          <div className={`${styles.formDiv}`}>
            <h1 className={`${styles.heading}`}>Create User</h1>

            <form className={styles.loginForm} onSubmit={signup}>
              {error && (
                <div className={`${styles.error}`}>
                  <h4>{error}</h4>
                </div>
              )}

              <div className={styles.formInput}>
                <label htmlFor="username" className={styles.label}>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formInput}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formInput}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  className={styles.input}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder={showPassword ? "password@123" : "XXXXXXXXXXXX"}
                  required
                />
              </div>

              <div className={styles.formInput}>
                <label htmlFor="contact" className={styles.label}>
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Enter your contact number"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formInput}>
                <label htmlFor="address" className={styles.label}>
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  required
                  className={styles.input}
                />
              </div>

              <div className={`${styles.showPasswordDiv}`}>
                <input
                  type="checkbox"
                  id="showP"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className={`${styles.passCheck}`}
                />
                <label htmlFor="showP">Show Password</label>
              </div>

              <button className={styles.loginButton} disabled={loading}>
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import styles from "./contactUsForm.module.css";
import { Services } from "apis/Services/Services";
import { toast } from "react-hot-toast";
export default function ContactForm() {
  const [loader, setloader] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setloader(true);
    console.log(data);
    Services.postContactUs(data)
      .then((res) => {
        console.log(res);
        toast.success("Your request has been submitted successfully.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong, try again later.");
      })
      .finally(() => setloader(false));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div className="mb-2">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <>
              <Text className={"p-1"} color={Colors.secondaryText}>
                Your Name
              </Text>
              <Input className={styles.input} {...field} placeholder="Name" />
            </>
          )}
        />
        {errors.name && (
          <Text color={"red"} className="px-2">
            {errors.name.message}
          </Text>
        )}
      </div>

      <div className="mb-2">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <>
              <Text className={"p-1"} color={Colors.secondaryText}>
                Your Email
              </Text>
              <Input
                className={styles.input}
                {...field}
                type="email"
                placeholder="Email"
              />
            </>
          )}
        />
        {errors.email && (
          <Text color={"red"} className="px-2">
            {errors.email.message}
          </Text>
        )}
      </div>
      <div className="mb-2">
        <Controller
          name="phone_number"
          control={control}
          rules={{
            required: "Phone is required",
            pattern: {
              value: /^01[0125][0-9]{8}$/gm,
              message: "Invalid phone number",
            },
          }}
          render={({ field }) => (
            <>
              <Text className={"p-1"} color={Colors.secondaryText}>
                Phone
              </Text>
              <Input
                className={styles.input}
                {...field}
                type="tel"
                placeholder="phone"
              />
            </>
          )}
        />
        {errors.phone_number && (
          <Text color={"red"} className="px-2">
            {errors.phone_number.message}
          </Text>
        )}
      </div>
      <div className="mb-2">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <>
              <Text className={"p-1"} color={Colors.secondaryText}>
                Your Message
              </Text>
              <Input.TextArea
                {...field}
                rows={4}
                placeholder="Message"
                className="pb-4"
              />
            </>
          )}
        />
      </div>
      <div className="my-2" style={{ marginInlineStart: "auto" }}>
        <Button
          type="primary"
          htmlType="submit"
          className="px-5"
          style={{
            background: Colors.primary,
            borderColor: Colors.primary,
            borderRadius: 5,
          }}
          loading={loader}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

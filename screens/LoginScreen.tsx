import { View } from "react-native";
import React from "react";
import { Text, Card, Input, Button } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Login } from "../services/auth-servise";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";
const LoginScreen = (): React.JSX.Element => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input email")
      .email("Email format is invalid."),
    password: yup
      .string()
      .required("Please input password")
      .min(3, "Password must be at least 3 characters"),
  });
  // Apply with React Hook Form
  const {
    control, // use for control input field through React Hook Form
    handleSubmit, // a function that use for form management while the form is sending
    formState: { errors, isSubmitting, isValid }, // bring values from form to check the form status
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  }); // end of useForm
  const onLogin = async (data: any) => {
    try {
      const res = await Login(data.email, data.password);
      if (res.status === 200) {
        Toast.show({ type: "success", text1: "Login Success." });
        // console.log("Login Success.");
      }
    } catch (error: any) {
      //handle error from Axios TypeScript
      let err: AxiosError<any> = error; // explicitly convert errors to AxiosError
      // status 401
      if (err.response?.status === 401) {
        Toast.show({ type: "error", text1: err.response?.data.message });
        // console.log(err.response?.data.message);
      } else {
        Toast.show({
          type: "error",
          text1: "An error occurred. Unable to connect the server.",
        });
        // console.log("An error occurred. Unable to connect the server.");
      }
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        {/* check email */}
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        {/* check password */}
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
              secureTextEntry
            />
          )}
        />
        <Button
          title="Log In"
          size="lg"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid}
        />
      </Card>
    </View>
  );
};
export default LoginScreen;
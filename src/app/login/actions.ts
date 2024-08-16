"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";

export async function login(formData: { email: string; password: string }) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { email, password } = formData; // Directly access email and password from the object

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log(error);
    //  return;
    throw new Error(error.message);
    // redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/private");
}

// export async function signup(formData: FormData) {
//   const supabase = createClient();

//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//     options: {
//       data: {
//         user_name: formData.get("username") as string,
//       },
//     },
//   };

//   // Validate the input data

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     console.log("Signup Error:", error.message);
//     redirect("/error");
//     return;
//   }

//   console.log("Signup Success:", data);

//   revalidatePath("/", "layout");
//   redirect("/login");
// }

export async function signup(formData: {
  email: string;
  password: string;
  username?: string;
}) {
  const supabase = createClient();

  const data = {
    email: formData.email, // Access email directly
    password: formData.password, // Access password directly
    options: {
      data: {
        user_name: formData.username, // Access username directly
      },
    },
  };

  // Validate the input data

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log("Signup Error:", error.message);
    throw new Error(error.message);
  }

  console.log("Signup Success:", data);

  revalidatePath("/", "layout");
  redirect("/login");
}

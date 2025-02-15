'use client'
import React from "react";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  email: string;
};

const Newsletter = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const respone = await axios.post("/api/discord", data);
  };
  return (
    <div className="flex rounded-md m-16 py-10 ring-1">
      <div className="flex-1 flex flex-col space-y-6 py-6 px-10 rounded-md">
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl">Zapisz się do newslettera</h1>
          <p className="text-xl">
            Nie przegap żadnej promocji i zdobywaj dodatkowe rabaty!
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <form
            className="flex gap-2 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              {...register("email")}
              placeholder="Twój e-mail"
              className="border-2 px-4 py-2 w-3/5 rounded-md"
            />
            <Button className="p-5" type="submit">
              Zapisz się
            </Button>
          </form>
          <span className="text-xs font-semibold text-balance">
            Potrzebujemy Twoich danych aby wysłać newsletter. Administratorem
            danych osobowych jest guguGaga sp. z o.o. z siedzibą w Częstochowie
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="newsletter.svg" alt="" className="h-[200px]" />
      </div>
    </div>
  );
};

export default Newsletter;
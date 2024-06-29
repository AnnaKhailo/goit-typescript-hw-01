type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

let user: Params = {
  email: "user@i.ua",
  firstName: "Olga",
  lastName: "Kovalchuk",
  phone: "+3806625855856",
};

console.log(user);

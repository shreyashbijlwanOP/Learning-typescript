import { useForm } from "react-hook-form";
import { IUser } from "../services/APIRespInterfaces/UserInterface";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userFormSchema = yup.object().shape({
  id: yup.number().min(0, "ID must be greater than or equal to 0"),
  name: yup.string().trim(),
  username: yup.string().trim(),
  email: yup.string().trim().email("Email must be a valid email address"),
  address: yup.object().shape({
    street: yup.string().trim(),
    suite: yup.string().trim(),
    city: yup.string().trim(),
    zipcode: yup.string().trim(),
    geo: yup.object().shape({
      lat: yup.string().trim(),
      lng: yup.string().trim(),
    }),
  }),
});

const ManageUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver<IUser>(userFormSchema),
  });
  const onSubmit = (data: IUser) => {
    console.log(data);
  };

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            {...register("name")}
            type="text"
            id="name"
            name="name"
          />
          <p>{errors?.name?.message}</p>

          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            {...register("username")}
            type="text"
            id="username"
            name="username"
          />
          <p>{errors?.username?.message}</p>

          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            {...register("email")}
            type="email"
            id="email"
            name="email"
          />
          <p>{errors?.email?.message}</p>

          <fieldset>
            <legend>Address</legend>
            <label htmlFor="street">Street:</label>
            <input
              className="form-control"
              {...register("address.street")}
              type="text"
              id="street"
              name="street"
            />
            <p>{errors?.address?.street?.message}</p>

            <label htmlFor="suite">Suite:</label>
            <input
              className="form-control"
              {...register("address.suite")}
              type="text"
              id="suite"
              name="suite"
            />
            <p>{errors?.address?.suite?.message}</p>

            <label htmlFor="city">City:</label>
            <input
              className="form-control"
              {...register("address.city")}
              type="text"
              id="city"
              name="city"
            />

            <label htmlFor="zipcode">Zip Code:</label>
            <input
              className="form-control"
              {...register("address.zipcode")}
              type="text"
              id="zipcode"
              name="zipcode"
            />
            <p>{errors?.address?.zipcode?.message}</p>

            <fieldset>
              <legend>Geo</legend>
              <label htmlFor="lat">Latitude:</label>
              <input
                className="form-control"
                {...register("address.geo.lat")}
                type="text"
                id="lat"
                name="lat"
              />
              <p>{errors?.address?.geo?.lat?.message}</p>

              <label htmlFor="lng">Longitude:</label>
              <input
                className="form-control"
                {...register("address.geo.lng")}
                type="text"
                id="lng"
                name="lng"
              />
              <p>{errors?.address?.geo?.lng?.message}</p>
            </fieldset>
          </fieldset>

          <input
            className="form-control btn btn-outline-primary"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ManageUser;

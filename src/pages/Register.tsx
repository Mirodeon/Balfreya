import RegisterForm from "../components/auth/RegisterForm";
import UserHub from "../components/profile/Userhub";

const Register = () => {
    document.title = "Balfreya - Register";
    return (
        <UserHub message={<>Register</>} content={<RegisterForm />} form={true} />
    );
};

export default Register;
type InputFormProps = {
    name: string;
    message: string;
    error: string | undefined;
    value: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    showMessage: boolean;
};

const InputForm = (props: InputFormProps) => {
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="container_input_form">
            <input
                className={
                    "input_form" +
                    (props.message ? " incorrect_input" : "") +
                    (props.error ? " invalid_input" : "")
                }
                id={props.name}
                type={props.name}
                placeholder={capitalizeFirstLetter(props.name)}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
            />
            <label htmlFor={props.name} className="label_form">
                {capitalizeFirstLetter(props.name)}
            </label>
            <div className="error_form">
                {props.error ? props.error : props.message && props.showMessage ? props.message : null}
            </div>
        </div>
    );
};

export default InputForm;
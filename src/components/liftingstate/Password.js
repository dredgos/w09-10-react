const Password = ({label, handleChange, check, value}) => (
    <div>
        <label htmlFor={ label }>{ label }</label>
        <input 
            id = {label}
            type="password"
            className="form-control"
            onChange={ handleChange }
            style = {{ border: `solid 1px ${check ? 'green' : 'red'}`}}
            value={ value }
        />
    </div>
);

export default Password;
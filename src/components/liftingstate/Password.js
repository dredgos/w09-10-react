const Password = ({label, handleChange, check}) => (
    <div>
        <label htmlFor={ label }>{ label }</label>
        <input 
        id = {label}
        type="password"
        className="form-control"
        onChange={ handleChange }
        style = {{ border: `solid 1px ${check ? 'green' : 'red'}`}}
        />
    </div>
);

export default Password;
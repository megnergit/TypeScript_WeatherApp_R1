//Form.tsx
type FormPropsType = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormPropsType> = ({ city, setCity, getWeather }) => {
    return (
        <div className='form-center'>
            <form onSubmit={getWeather}>
                <input type='text' name='city'
                    placeholder="name of city"
                    onChange={e => setCity(e.target.value)} value={city} />

            </form>
        </div>
    )
};
export default Form;
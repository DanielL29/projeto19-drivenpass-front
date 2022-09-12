import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { InputContainer, InputWrapper } from "./InputStyle";

export default function Input({ id, label, value, disabled, error, helperText, name, onChange, type, showPassword, setShowPassword }) {
    return (
        <InputContainer>
            <InputWrapper
                id={id}
                label={label}
                variant="outlined"
                value={value}
                disabled={disabled}
                type={type ? showPassword ? 'text' : 'password' : 'text'}
                error={error}
                helperText={helperText}
                name={name}
                onChange={onChange}
                required
                size="small"
                InputProps={{
                    endAdornment: name === 'password' ? (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={e => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ) : ''
                }}
            />
        </InputContainer>
    )
}
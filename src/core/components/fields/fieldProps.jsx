import { TextFieldIcon, EmailFieldIcon, PhoneFieldIcon, PasswordFieldIcon, } from './fieldIcons';


const CommonProps = {
    height: 25
}

const baseProps = {
    size: "small",
    fullWidth: true,
}

export default {
    textField: {
        ...baseProps,
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
                endAdornment: <TextFieldIcon />,
            },
        }
    },
    emailField: {
        ...baseProps,
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
                endAdornment: <EmailFieldIcon />,
            },
        }
    },
    phoneField: {
        ...baseProps,
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
                endAdornment: <PhoneFieldIcon />,
            },
        }
    },
    numericField: {
        ...baseProps,
        slotProps: {
            input: {
                type: "text",            // use text + inputMode for better control
                inputMode: "numeric",
                onKeyDown: (e) => {
                    const allowedNav = [
                        "Backspace", "Delete", "Tab", "Escape", "Enter",
                        "ArrowLeft", "ArrowRight", "Home", "End"
                    ];
                    if (
                        allowedNav.includes(e.key) ||
                        ((e.ctrlKey || e.metaKey) && ["a", "c", "v", "x"].includes(e.key.toLowerCase()))
                    ) return;

                    if (!/^[0-9]$/.test(e.key)) e.preventDefault(); // block non-digits
                },
                onPaste: (e) => {
                    const t = e.clipboardData.getData("text");
                    if (!/^\d+$/.test(t)) e.preventDefault();
                },
                sx: {
                    height: CommonProps.height,
                },
                endAdornment: <PhoneFieldIcon />,
            },
        },
    },
    decimalField: {
        ...baseProps,
        slotProps: {
            input: {
                type: "text",
                inputMode: "decimal",
                onKeyDown: (e) => {
                    const allowedNav = [
                        "Backspace", "Delete", "Tab", "Escape", "Enter",
                        "ArrowLeft", "ArrowRight", "Home", "End"
                    ];
                    if (
                        allowedNav.includes(e.key) ||
                        ((e.ctrlKey || e.metaKey) && ["a", "c", "v", "x"].includes(e.key.toLowerCase()))
                    ) return;

                    const isDigit = /^[0-9]$/.test(e.key);
                    const isDot = e.key === ".";
                    if (!isDigit && !isDot) e.preventDefault();
                    if (isDot && e.currentTarget.value.includes(".")) e.preventDefault();
                },
                onPaste: (e) => {
                    const t = e.clipboardData.getData("text");
                    if (!/^\d*\.?\d*$/.test(t)) e.preventDefault();
                },
            },
        }
    },
    passwordField: {
        ...baseProps,
        type: "password",
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
                endAdornment: <PasswordFieldIcon />,
            },
        }
    },
    selectTextField: {
        ...baseProps,
        select: true,
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
            },
        }
    },
    dateField: {
        ...baseProps,
        type: "date",
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
            },
        },
        InputLabelProps: {
            shrink: true,        // 👈 forces label to stay up
        }
    },
    timeField: {
        ...baseProps,
        type: "time",
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
            },
        },
        InputLabelProps: {
            shrink: true,        // 👈 forces label to stay up
        }
    },
    dateTimeField: {
        ...baseProps,
        type: "datetime-local",
        slotProps: {
            input: {
                sx: {
                    height: CommonProps.height,
                },
            },
        },
        InputLabelProps: {
            shrink: true,        // 👈 forces label to stay up
        }
    },
    checkBox: {
        formGroup: {
            "aria-label": "position",
            row: true,
        },
        stack: {
            spacing: 1,
            direction: "row",
            style: {
                width: "100%",
            }
        },
        formControlLabel: {
            labelPlacement: "end",
            sx: {
                flex: 1, // make it grow inside parent
                overflow: "hidden",
                "& .MuiFormControlLabel-label": { 
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block", // ensures ellipsis works
                }
            },
            style: {
                width: "100%",
                height: CommonProps.height - 11,
                margin: 0,
            },
        },
        control: {
            size: "small",
            style: {
                padding: 5,
            },
        }
    },

    radio: {
        radioGroup: {
            "aria-label": "position",
            row: true,
        },
        formControlLabel: {
            labelPlacement: "end",
            sx: {
                flex: 1, // make it grow inside parent
                overflow: "hidden",
                "& .MuiFormControlLabel-label": { 
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block", // ensures ellipsis works
                }
            },
            style: {
                width: "100%",
                height: CommonProps.height,
                margin: 0,
            },
        },
        control: {
            size: "small",
            style: {
                padding: 5,
            },
        }
    }
}
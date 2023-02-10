import mongoose from "mongoose";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { 
        type: String,
        required: true,
        match: [passwordRegex, 'A senha deve conter mais que 8 caracteres e incluir letras, número e caracteres especiais'] 
    },
    cpf: {
        type: String,
        required: true,
        match: /^\d{11}$/
    },
    phone: {
        type: String,
        required: true,
        match: /^\d{10,13}$/
    },
    address: {
        street: { type: String, required: true },
        number: { type: String, required: true },
        zipCode: { 
            type: String,
            match: /^\d{8}$/
        },
        city: { type: String, required: true },
        state: { 
            type: String, 
            required: true,
            enum: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
        }
    },
    createdDate: { type: String }
  },
  {
    versionKey: false
  }
);


const users = mongoose.model("users", userSchema);

export default users;
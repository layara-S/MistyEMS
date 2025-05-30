import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'staff'
  },
  password: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
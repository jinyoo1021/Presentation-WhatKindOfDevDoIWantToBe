import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats or dogs?</p>
    
      <span>
        <input type="checkbox" id="pet" name="pet" value="Cat" />
        <label htmlFor="pet">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="pet2" name="pet2" value="Dog" /> 
        <label htmlFor="pet2">Dogs 🐶</label>
      </span>
    </div>
  );
}
// Fixed Dog's id and htmlFor value
export default PetForm;

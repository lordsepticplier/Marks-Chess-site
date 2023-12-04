import './MarkForm.css';

function MyForm() {


  return (
    <div class="card" >
      <div class="card-body">
        <h2 class="card-title text-center">Contact Mark</h2>
        <form >
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone number</label>
                <input type="number" class="form-control" id="number" name="number" required/>
            </div>
            <div class="col-md-3">
              <label for="Reason" class="form-label">Reason</label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>tournament booking</option>
                <option>1 on 1 booking</option>
                <option>running a club at a school</option>
                <option>other</option>
              </select>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Request</label>
                <textarea class="form-control" id="feedback" name="feedback" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
        <div id="message" class="message"></div>
      </div>
    </div>
  )
}
export default MyForm;




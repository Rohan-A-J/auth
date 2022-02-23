function App() {
  return ({
    <>
    <div className="container1">
    <form className="row g-3 frm">
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control txta" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Password</label>
    <input type="password" className="form-control txta" id="validationDefault05" required />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
  </div>
  </>
  });
}

export default App;

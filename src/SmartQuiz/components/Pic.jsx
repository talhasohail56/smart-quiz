import axios from 'axios';
import { useState } from 'react';

export default function Pic() {
  const [file, setFile] = useState();
  const [imageName, setImageName] = useState();
  const [description, setDescription] = useState("")

  const submit = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description)

    const result = await axios.post('http://192.168.252.190:8010/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}});
    setImageName(result.data.imageName);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
        <input
          onChange={e => setDescription(e.target.value)} 
          type="text"
        ></input>
       
        <button type="submit">Submit</button>
      </form>
      {imageName && <img src={imageName} alt="Uploaded Image" />}
    </div>
  );
}

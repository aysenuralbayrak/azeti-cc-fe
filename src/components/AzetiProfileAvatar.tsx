import * as React from "react";
import {Avatar} from "@material-ui/core";
import uploadAvatar from '../images/uploadAvatar.png';

interface Props {
  setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void;
}

export const AzetiProfileAvatar: React.FC<Props> = ({setFieldValue}) => {

  const getFileFromInput = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    Array.prototype.forEach.call(event.currentTarget.files, file => {
      getFileFromInput(file)
        .then((base64) => {
          const avatar = document.getElementsByTagName("img")[0];
          avatar.src = base64;
          setFieldValue('avatar', base64);
        }).catch((reason) => {
        console.log(`Error during upload ${reason}`);
        event.target.value = '';
      });
    })
  }

  return (
    <div>
      <input
        accept="image/*"
        id="avatar-upload"
        type="file"
        onChange={handleFileChange}
        hidden
      />
      <label htmlFor="avatar-upload">
        <Avatar
          src={uploadAvatar}
          id="avatar"
          style={{cursor: "pointer"}}/>
      </label>
    </div>
  );
}
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import db from "./firebase";

const listaCursos = "curso";
const listaTemarios = "temario";

export const apiSettings = {
  getCursos: async () => {
    const datos = await getDocs(collection(db, listaCursos));
    let datosJson = [];
    datos.forEach((doc) => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson != []) {
      datosJson = [{}];
    }
    return await datosJson;
  },
  getCurso: async (idCurso) => {
    const curso = await getDoc(doc(db, listaCursos, idCurso));
    return [curso.id, curso.data()];
  },

  getTemario: async (idCurso) => {
    const q = query(
      collection(db, listaTemarios),
      where("codCurso", "==", `${idCurso}`)
    );
    const querySnapshot = await getDocs(q);
    let temarioJson = [];
    querySnapshot.forEach((doc) => {
      temarioJson.push([doc.id, doc.data()]);
    });

    if (temarioJson != []) {
      temarioJson = [{}];
    }
    console.log(temarioJson);
    return await temarioJson;
  },
};

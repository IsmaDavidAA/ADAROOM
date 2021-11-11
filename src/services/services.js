import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  orderBy,
  limit,
  updateDoc,
  addDoc,
  increment,
  FieldValue,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const listaCursos = "curso";
const listaTemarios = "temario";
const listaInscripciones = "inscripcion";

export const apiSettings = {
  getCursos: async () => {
    const datos = await getDocs(collection(db, listaCursos));
    let datosJson = [];
    datos.forEach((doc) => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
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

    if (temarioJson === []) {
      temarioJson = [{}];
    }
    console.log(temarioJson);
    return await temarioJson;
  },

  getTopCursos: async () => {
    const q = query(
      collection(db, listaCursos),
      orderBy("cantInscritos", "desc"),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
    let datosJson = [];
    querySnapshot.forEach((doc) => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
      datosJson = [{}];
    }
    console.log(datosJson);
    return await datosJson;
  },

  postInscripcion: async(idCurso, idEst) => {
    await addDoc(collection(db, listaInscripciones), {
      codCurso: idCurso,
      codEst: idEst,
      estadoInscripcion: 1,
    });
    return true;
  },

  x: async(idCurso, idEst) => {
    await  deleteDoc(doc(db, listaInscripciones,doc.id
      ));
   
  },

  putCurso: async(idCurso) => {
    await updateDoc(doc(db, listaCursos, idCurso), {
      cantInscritos: increment(1),
    });
    return true;
  },

  y: async(idCurso) => {
    await updateDoc(doc(db, listaCursos, idCurso), {
      cantInscritos: increment(-1),
    });
    return true;
  },

  getInscrito: async (idCurso, idEst) => {
    let existe = false;
    const q = query(
      collection(db, listaInscripciones),
      where("codCurso", "==", idCurso),
      where("codEst", "==", idEst)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      existe = true;
      console.log("oka");
    });

    return existe;
  },


  getInscripciones: async (idEst) => {
    const q = query(
      collection(db, "inscripcion"),
      where("codEst", "==", `${idEst}`)
    );
    const querySnapshot = await getDocs(q);
    let inscripcionesJson = [];
    querySnapshot.forEach((doc) => {
       inscripcionesJson.push(doc.data().codCurso);
    });
    let insCompletoJson = [];
    inscripcionesJson.forEach( async (element)=>{
      
      const curso = await getDoc(doc(db, listaCursos, `${element}`));
      insCompletoJson.push([curso.id, curso.data()]);
    });
    
    
    if (insCompletoJson === []) {
      insCompletoJson = [{}];
    }
    console.log(insCompletoJson);
    return await insCompletoJson;
  },


};

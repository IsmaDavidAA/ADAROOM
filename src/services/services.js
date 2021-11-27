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
  setDoc,
  increment,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const listaCursos = "curso";
const listaTemarios = "temario";
const listaInscripciones = "inscripcion";
const estudiante = "estudiante";
const contenidoSeccion = "contenidoSeccion";

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
    let promise = getCont(doc.id);
    let promises = [];
    querySnapshot.forEach((doc) => {
      promise = getCont(doc.id);
      promises.push(promise);
    });

    let responses = await Promise.all(promises)
    let cont = 0;
    querySnapshot.forEach((doc)=>{
      temarioJson.push([doc.id, doc.data(), responses[cont]]);
      cont++;
    })

    if (temarioJson === []) {
      temarioJson = [{}];
    }
    console.log(temarioJson);
    return temarioJson;
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

  postInscripcion: async (idCurso, idEst) => {
    await addDoc(collection(db, listaInscripciones), {
      codCurso: idCurso,
      codEst: idEst,
      estadoInscripcion: 1,
    });
    return true;
  },

  dropOutCourse: async (idIns) => {
    await deleteDoc(doc(db, listaInscripciones, idIns));
    return true;
  },

  putCurso: async (idCurso) => {
    await updateDoc(doc(db, listaCursos, idCurso), {
      cantInscritos: increment(1),
    });
    return true;
  },

  updateCourse: async (idCurso) => {
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
    let idIns;
    querySnapshot.forEach((doc) => {
      existe = true;
      idIns = doc.id;
      console.log("oka");
    });

    return [existe, idIns];
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
    let promise = getCont(doc.id);
    let promises = [];
    inscripcionesJson.forEach( (element) => {
      promise =  getDoc(doc(db, listaCursos, `${element}`));
      promises.push(promise);
    });
    let responses = await Promise.all(promises);
    let cursos=[];
    responses.forEach(element=>{
      cursos.push([element.id, element.data()]);
    });
    if (cursos === []) {
      cursos = [{}];
    } 
    return cursos;
  },

  getName: async (userId) => {
    const user = await getDoc(doc(db, estudiante, userId));
    console.log(user);
    return [user.id, user.data()];
  },

  getContenido: async (temarioId) => {
    const q = query(
      collection(db, contenidoSeccion),
      where("codSeccion", "==", `${temarioId}`)
    );
    const querySnapshot = await getDocs(q);
    let contenidoJson = [];
    querySnapshot.forEach((doc) => {
      contenidoJson.push([doc.id, doc.data()]);
    });
    return contenidoJson;
  },
};

const getCont = async(temarioId)=>{
  const q = query(
    collection(db, contenidoSeccion),
    where("codSeccion", "==", `${temarioId}`)
  );
  const querySnapshot = await getDocs(q);
  let contenidoJson = [];
  querySnapshot.forEach((doc) => {
    contenidoJson.push(doc.data());
  });
  return contenidoJson;
}
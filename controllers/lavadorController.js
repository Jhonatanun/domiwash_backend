// controllers/lavadorController.js
import * as m from '../models/lavadorModel.js';

export async function list(req,res,next){ try{ res.json(await m.getAllLavadores()); }catch(e){next(e);} }
export async function getOne(req,res,next){ try{ const r=await m.getLavadorById(req.params.id); r?res.json(r):res.status(404).end(); }catch(e){next(e);} }
export async function create(req,res,next){ try{ res.status(201).json(await m.createLavador(req.body)); }catch(e){next(e);} }
export async function update(req,res,next){ try{ res.json(await m.updateLavador(req.params.id, req.body)); }catch(e){next(e);} }
export async function remove(req,res,next){ try{ await m.deleteLavador(req.params.id); res.status(204).end(); }catch(e){next(e);} }

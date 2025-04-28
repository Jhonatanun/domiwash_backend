// controllers/pagoController.js
import * as m from '../models/pagoModel.js';
export async function list(req,res,next){ try{ res.json(await m.getAllPagos()); }catch(e){next(e);} }
export async function getOne(req,res,next){ try{ const r=await m.getPagoById(req.params.id); r?res.json(r):res.status(404).end(); }catch(e){next(e);} }
export async function create(req,res,next){ try{ res.status(201).json(await m.createPago(req.body)); }catch(e){next(e);} }
export async function update(req,res,next){ try{ res.json(await m.updatePago(req.params.id, req.body)); }catch(e){next(e);} }
export async function remove(req,res,next){ try{ await m.deletePago(req.params.id); res.status(204).end(); }catch(e){next(e);} }

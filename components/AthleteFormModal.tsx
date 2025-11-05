import React, { useState } from 'react';

interface AthleteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  onSubmit: (data: AthleteFormData) => void;
}

export interface AthleteFormData {
  nome: string;
  idade: string;
  peso: string;
  altura: string;
  experiencia: string;
  objetivos: string;
  lesoes: string;
  disponibilidade: string;
  telefone: string;
  email: string;
}

const AthleteFormModal: React.FC<AthleteFormModalProps> = ({ isOpen, onClose, planName, onSubmit }) => {
  const [formData, setFormData] = useState<AthleteFormData>({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    experiencia: '',
    objetivos: '',
    lesoes: '',
    disponibilidade: '',
    telefone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-0 sm:p-4 sm:items-center">
      <div className="bg-white w-full sm:rounded-xl sm:max-w-4xl max-h-screen sm:max-h-[95vh] overflow-y-auto sm:m-2">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white pb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
              Questionário - {planName}
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                    style={{ fontSize: '16px', minHeight: '56px' }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Idade *
                  </label>
                  <input
                    type="number"
                    name="idade"
                    value={formData.idade}
                    onChange={handleInputChange}
                    required
                    min="15"
                    max="80"
                    className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                    style={{ fontSize: '16px', minHeight: '56px' }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Peso (kg) *
                  </label>
                  <input
                    type="number"
                    name="peso"
                    value={formData.peso}
                    onChange={handleInputChange}
                    required
                    min="40"
                    max="150"
                    step="0.1"
                    className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                    style={{ fontSize: '16px', minHeight: '56px' }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Altura (cm) *
                  </label>
                  <input
                    type="number"
                    name="altura"
                    value={formData.altura}
                    onChange={handleInputChange}
                    required
                    min="140"
                    max="220"
                    className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                    style={{ fontSize: '16px', minHeight: '56px' }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Telefone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                    style={{ fontSize: '16px', minHeight: '56px' }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                    style={{ fontSize: '16px', minHeight: '56px' }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Experiência no Esporte *
                </label>
                <select
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                  style={{ fontSize: '16px', minHeight: '56px' }}
                >
                  <option value="">Selecione sua experiência</option>
                  <option value="iniciante">Iniciante (0-1 ano)</option>
                  <option value="intermediario">Intermediário (1-3 anos)</option>
                  <option value="avancado">Avançado (3+ anos)</option>
                  <option value="competitivo">Competitivo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Disponibilidade para Treinos por Semana *
                </label>
                <select
                  name="disponibilidade"
                  value={formData.disponibilidade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white"
                  style={{ fontSize: '16px', minHeight: '56px' }}
                >
                  <option value="">Selecione sua disponibilidade</option>
                  <option value="3x">3x por semana</option>
                  <option value="4x">4x por semana</option>
                  <option value="5x">5x por semana</option>
                  <option value="6x">6x por semana</option>
                  <option value="diario">Diário</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Objetivos Principais *
                </label>
                <textarea
                  name="objetivos"
                  value={formData.objetivos}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Ex: Completar uma meia maratona, melhorar tempo nos 10k, nadar em águas abertas..."
                  className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white resize-none"
                  style={{ fontSize: '16px', minHeight: '100px' }}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Possui alguma lesão ou limitação física?
                </label>
                <textarea
                  name="lesoes"
                  value={formData.lesoes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Descreva lesões atuais ou históricas, dores, limitações... (Se não possui, escreva 'Nenhuma')"
                  className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-blue-800 transition-colors bg-slate-50 focus:bg-white resize-none"
                  style={{ fontSize: '16px', minHeight: '80px' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8 sticky bottom-0 bg-white">
              <button
                type="submit"
                className="w-full px-6 py-4 text-lg bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors font-semibold"
                style={{ minHeight: '56px' }}
              >
                Enviar Informações
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full px-6 py-4 text-lg border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                style={{ minHeight: '56px' }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AthleteFormModal;

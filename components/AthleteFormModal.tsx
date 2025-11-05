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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[95vh] overflow-y-auto m-2">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Questionário - {planName}
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
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
                  className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
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
                  className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
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
                  className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Experiência no Esporte *
              </label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
              >
                <option value="">Selecione sua experiência</option>
                <option value="iniciante">Iniciante (0-1 ano)</option>
                <option value="intermediario">Intermediário (1-3 anos)</option>
                <option value="avancado">Avançado (3+ anos)</option>
                <option value="competitivo">Competitivo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Disponibilidade para Treinos por Semana *
              </label>
              <select
                name="disponibilidade"
                value={formData.disponibilidade}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
              >
                <option value="">Selecione sua disponibilidade</option>
                <option value="3x">3x por semana</option>
                <option value="4x">4x por semana</option>
                <option value="5x">5x por semana</option>
                <option value="6x">6x por semana</option>
                <option value="diario">Diário</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Objetivos Principais *
              </label>
              <textarea
                name="objetivos"
                value={formData.objetivos}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Ex: Completar uma meia maratona, melhorar tempo nos 10k, nadar em águas abertas..."
                className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Possui alguma lesão ou limitação física?
              </label>
              <textarea
                name="lesoes"
                value={formData.lesoes}
                onChange={handleInputChange}
                rows={2}
                placeholder="Descreva lesões atuais ou históricas, dores, limitações... (Se não possui, escreva 'Nenhuma')"
                className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 sm:py-3 text-base border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 sm:py-3 text-base bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
              >
                Enviar Informações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AthleteFormModal;
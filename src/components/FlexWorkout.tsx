import React from 'react';
import { GripVertical, Trash2, Copy, Edit2, Dumbbell } from 'lucide-react';
import { FlexExercise } from '../types/workout';
import { motion } from 'framer-motion';
const MOCK_FLEX_EXERCISES: FlexExercise[] = [
{
  id: '1',
  name: '90/90 com Rotação',
  thumbnail:
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
  category: 'Mobilidade',
  equipment: 'Chão',
  methodology: '',
  reps: '',
  load: '',
  interval: '',
  notes: ''
},
{
  id: '2',
  name: 'Agachamento Livre',
  thumbnail:
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop',
  category: 'Pernas',
  equipment: 'Barra',
  methodology: 'Salvou',
  reps: 'Salvou',
  load: 'Salvou',
  interval: '33',
  notes: 'Salvou'
}];

export function FlexWorkout() {
  return (
    <div className="space-y-8">
      <div className="flex justify-end gap-4 mb-4">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <Edit2 size={16} />
          Editar
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <Dumbbell size={16} />
          Treinar
        </button>
      </div>

      <div className="space-y-8">
        {MOCK_FLEX_EXERCISES.map((exercise) =>
        <motion.div
          key={exercise.id}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="group relative">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-gray-900">
                {exercise.name}
              </h3>
            </div>

            <div className="flex gap-6">
              {/* Thumbnail */}
              <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                src={exercise.thumbnail}
                alt={exercise.name}
                className="w-full h-full object-cover" />

              </div>

              {/* Fields */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-1">
                      Metodologia
                    </label>
                    <input
                    type="text"
                    defaultValue={exercise.methodology}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" />

                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-1">
                      Repetições
                    </label>
                    <div className="flex gap-2">
                      <input
                      type="text"
                      defaultValue={exercise.reps}
                      className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" />

                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <GripVertical size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-1">
                      Carga
                    </label>
                    <input
                    type="text"
                    defaultValue={exercise.load}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" />

                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-1">
                      Intervalo
                    </label>
                    <div className="flex gap-2">
                      <input
                      type="text"
                      defaultValue={exercise.interval}
                      className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" />

                      <button className="p-2 text-gray-400 hover:text-red-500">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Observações
                  </label>
                  <div className="flex gap-2">
                    <textarea
                    defaultValue={exercise.notes}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none h-20" />

                    <button className="p-2 text-gray-400 hover:text-blue-500 self-start">
                      <Copy size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}
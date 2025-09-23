'use client'
import * as Dialog from '@radix-ui/react-dialog';
import { Box, Text, Button, Badge, Avatar, Flex, Heading } from '@radix-ui/themes';
import { ChevronRight, X, MapPin, Building2, Clock, ExternalLink } from 'lucide-react';

type JobModalProps = {
  job: any;
  open: boolean;
  onClose: () => void;
};

export default function JobModal({ job, open, onClose }: JobModalProps) {
  if (!job) return null;
  
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
        <Dialog.Content 
          className="fixed top-1/2 left-1/2 bg-gradient-to-br from-gray-900/95 to-purple-900/90 backdrop-blur-lg border border-purple-500/50 rounded-3xl shadow-2xl p-8 z-50 max-w-2xl w-[90vw] max-h-[90vh] overflow-y-auto" 
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <Dialog.Title className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                {job.job_title}
              </Dialog.Title>
              <Flex align="center" gap="3" className="mb-4">
                {job.employer_logo && (
                  <Avatar size="3" src={job.employer_logo} radius="full" fallback="C" />
                )}
                <div>
                  <Text size="4" weight="bold" className="text-blue-200 flex items-center gap-2">
                    <Building2 size={16} />
                    {job.employer_name}
                  </Text>
                  <Text size="2" className="text-purple-300 flex items-center gap-2 mt-1">
                    <MapPin size={14} />
                    {job.job_location}
                  </Text>
                </div>
              </Flex>
            </div>
            <Dialog.Close asChild>
              <Button 
                variant="ghost" 
                size="3" 
                className="text-purple-300 rounded-full p-2"
                aria-label="Close modal"
              >
                <X size={20} />
              </Button>
            </Dialog.Close>
          </div>

          {/* Job Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-4">
              <Text size="2" className="text-blue-300 flex items-center gap-2 mb-1">
                <Clock size={14} />
                Employment Type
              </Text>
              <Badge color="blue" size="2">{job.job_employment_type}</Badge>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-4">
              <Text size="2" className="text-purple-300 flex items-center gap-2 mb-1">
                <Building2 size={14} />
                Publisher
              </Text>
              <Text size="3" weight="medium" className="text-white">{job.job_publisher}</Text>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-4">
              <Text size="2" className="text-cyan-300 flex items-center gap-2 mb-1">
                <Clock size={14} />
                Posted
              </Text>
              <Text size="3" weight="medium" className="text-white">{job.job_posted_at}</Text>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <Heading size="4" className="text-blue-200 mb-3">Job Description</Heading>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 max-h-60 overflow-y-auto">
              <Text className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
                {job.job_description}
              </Text>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-purple-500/30">
            {job.job_apply_link && (
              <a 
                href={job.job_apply_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg"
              >
                <ExternalLink size={18} />
                Apply Now
                <ChevronRight size={18} />
              </a>
            )}
            <Dialog.Close asChild>
              <Button 
                variant="soft" 
                size="3" 
                className="flex-1 bg-gray-700/50 text-gray-200 border border-gray-600/50 rounded-2xl"
              >
                Close
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

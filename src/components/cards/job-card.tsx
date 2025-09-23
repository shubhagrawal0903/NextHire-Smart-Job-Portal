'use client'
import { Avatar, Badge, Button, Card, Flex, Heading } from '@radix-ui/themes'
import { Box, Text } from '@radix-ui/themes'
import { ChevronRight } from 'lucide-react'

type JobCardProps = {
    job: any;
    fromSearch?: boolean;
    onViewDetails?: (job: any) => void;
};

export default function JobCard({ job, fromSearch = false, onViewDetails }: JobCardProps) {
    // Accessibility: Card is focusable, button has aria-label
    return (
        <Card
            tabIndex={0}
            aria-label={`Job card for ${job.job_title}`}
            style={{
                maxWidth: fromSearch ? "100%" : "25%",
                minWidth: 350,
                height: 320,
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            className="job-card-enhanced"
        >
            <Flex align="start" justify={"between"} style={{ marginBottom: 10 }}>
                <Heading className='truncate'>{job.job_title}</Heading>
                <Badge color="blue">{job.job_employment_type}</Badge>
            </Flex>
            <div className='flex-1'>
                <p className='line-clamp-4'>{job.job_description}</p>
            </div>
            <Badge color='blue' style={{ margin: '10px 0', width: "min-content" }}>{job.job_location}</Badge>
            <Flex justify={"between"} align={"end"}>
                <Box maxWidth="240px">
                    <Card>
                        <Flex gap="3" align="center">
                            {job.employer_logo && <Avatar size="2" src={job.employer_logo} radius="full" fallback="T" />}
                            <Box>
                                <Text as="div" size="2" weight="bold">{job.employer_name}</Text>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
                <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg px-4 py-2"
                    aria-label={`View details for ${job.job_title}`}
                    onClick={() => onViewDetails && onViewDetails(job)}
                >
                    <Text className="text-white font-medium">View job details</Text>
                    <ChevronRight className="text-white" />
                </Button>
            </Flex>
        </Card>
    );
}
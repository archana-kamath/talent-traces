create database talent_database;
use talent_database;

#---------------------- applyJob table creation below --------

drop table applyJob;

create table applyJob(
userid varchar(500),
jobid int references job(jobid),
appliedOn varchar(500));

select * from applyJob;

#------  user_info table creation below -------------

select * from user_info;

drop table user_info;

create table user_info(
	userid int not null auto_increment,
	userFirstName varchar(500),
	userLastName varchar(500),
	userEmail varchar(500),
	userContactNumber varchar(500),
	userAddress varchar(500),
	userDesignation varchar(500),
	userEducation varchar(500),
	userExperience varchar(500),
	userSkill varchar(500),
	userOther varchar(500),
	resumeLink varchar(500),
	primary key (userid)
);

select * from user_info;

#------- job table creation below-----------------

drop table job;

create table job(
	jobid int not null auto_increment,
	jobTitle varchar(500),
	jobDesc varchar(500),
	postedBy varchar(500),
	postedOn varchar(500),
	company varchar(500),
	yoe varchar(500),
	jobLocation varchar(500),
	jobType varchar(500),
	jobSalary varchar(500),
	primary key (jobid)
);

select * from job;
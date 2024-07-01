using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace final_project_career_hub_app.Models;

public partial class JobDbContext : DbContext
{
    public JobDbContext()
    {
    }

    public JobDbContext(DbContextOptions<JobDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ApplicationStatus> ApplicationStatuses { get; set; }

    public virtual DbSet<Job> Jobs { get; set; }

    public virtual DbSet<SavedJob> SavedJobs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ApplicationStatus>(entity =>
        {
            entity.HasKey(e => e.StatusId).HasName("PK__applicat__C8EE2063D8FE2E6C");

            entity.ToTable("applicationStatus");

            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.Job).WithMany(p => p.ApplicationStatuses)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("FK__applicati__JobId__3C69FB99");
        });

        modelBuilder.Entity<Job>(entity =>
        {
            entity.HasKey(e => e.JobId).HasName("PK__jobs__056690C28A419F8B");

            entity.ToTable("jobs");

            entity.Property(e => e.City)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.ExperienceLevel)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.JobDescription).HasColumnType("text");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.SalaryRange)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.State)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.ZipCode)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SavedJob>(entity =>
        {
            entity.HasKey(e => e.SaveId).HasName("PK__savedJob__1450D3A6FB478E04");

            entity.ToTable("savedJobs");

            entity.HasOne(d => d.Job).WithMany(p => p.SavedJobs)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("FK__savedJobs__JobId__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

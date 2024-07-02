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

    public virtual DbSet<Job> Jobs { get; set; }

    public virtual DbSet<SavedJob> SavedJobs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=ZACKS_PC;Database=JobDb;Trusted_Connection=True;;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Job>(entity =>
        {
            entity.HasKey(e => e.JobId).HasName("PK__jobs__056690C28A419F8B");

            entity.ToTable("jobs");

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
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.SalaryRange)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SavedJob>(entity =>
        {
            entity.HasKey(e => e.SaveId).HasName("PK__savedJob__1450D3A6FB478E04");

            entity.ToTable("savedJobs");

            entity.Property(e => e.ApplicationStatus)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("applicationStatus");

            entity.HasOne(d => d.Job).WithMany(p => p.SavedJobs)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("FK__savedJobs__JobId__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
